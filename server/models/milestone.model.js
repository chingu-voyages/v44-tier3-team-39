import { Schema, model } from 'mongoose';

const milestoneSchema = new Schema({
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
        default: () => Date.now() + 90 * 24 * 60 * 60 * 1000, // defaults to 90 days from present
        required: true
    },
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
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    collaborators: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true
});

export default model('Milestone', milestoneSchema);
