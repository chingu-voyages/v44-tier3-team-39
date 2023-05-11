const mongoose = require('mongoose')
const Schema = mongoose.Schema

// GROUP INPUT NEEDED for id...do we want to use uuid here, any other package or create middleware function?
// TODO validate fields
const UserSchema = new Schema({
    username: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        displayName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    /* Notifications: { GROUP INPUT NEEDED: Should notifications be addressed per Milestone, or be globally applied for each User?
        upcoming: {
            activeStatus: {
                type: Boolean,
                default: false,
                required: true
            },
            frequency: {
                type:String,
                enum: ['daily', 'weekly', 'bi-weekly'],
                default: 'weekly'
            },
            time: {
                type: Date,
                required: true
            }
        },
        overdue: {
            activeStatus: {
                type: Boolean,
                default: false,
                required: true
            },
            frequency: {
                type:String,
                enum: ['daily', 'weekly', 'bi-weekly'],
                default: 'weekly'
            },
            time: {
                type: Date,
                required: true
            }
        }
    } */
    milestones : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Milestone'
    }]
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)