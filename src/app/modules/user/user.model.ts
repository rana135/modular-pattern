import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

//creating schema using interface:schema তৈরীর সময় type কে capital letter দিয়ে দিতে হবে।
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema); //model এর ভিতরে প্রথমেই model এর নাম then সেই schema ।
export default User;