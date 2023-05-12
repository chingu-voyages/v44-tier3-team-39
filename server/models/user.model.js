// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

// GROUP INPUT NEEDED for id...do we want to use uuid here, any other package or create middleware function?
// TODO validate fields
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
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
        type: Schema.Types.ObjectId,
        ref: 'Milestone'
    }]
},
{
    timestamps: true
})
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = model('User', userSchema);

export default User;

// module.exports = mongoose.model('User', userSchema)