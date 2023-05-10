const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')
const Schema = mongoose.Schema

// GROUP INPUT NEEDED FOR id, tags
// title, description, deadline, status, user, timestamps
// TODO validation
const milestoneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        default: new Date(new Date.getTime() + 90 * 24 * 60 * 60 * 1000), // defaults to 90 days from present
        required: true
    },
    /* Group Input: Are we making Tags a middlware or JSON/Array? */
    status: {
        type: String,
        enum: ['completed', 'in-progress', 'not-started', 'abandoned'],
        visibility: {
            type: String,
            enum: ['public', 'private'],
            default: 'public'
        },
        default: 'not-started',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    collaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    timestamps: true
})

milestoneSchema.plugin
(AutoIncrement, {
    inc_field: 'milestone-number',
    id: 'milestoneNum',
    start_seq: 1238
})  // To have a unique id, that safely searchable && doesn't start at 0 --> start_seq.  Doesn't affect milestones actual _id, just keeps it safe from needing to be used or accessed.

module.exports = mongoose.model('Milestone', milestoneSchema)

