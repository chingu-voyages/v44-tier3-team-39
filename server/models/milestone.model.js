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
        enum: ['completed', 'In Progress', 'not-started', 'abandoned'],
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
        ref: 'User'
    },
    collaborators: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    tags: [
        {
            type: String
        }
    ]
}, {
    timestamps: true
});

const Milestone = model('Milestone', milestoneSchema);

export default Milestone;
