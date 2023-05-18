import User from "./user.model";

//Database Query:schema structure maintain করে করতে হবে:
export const createUserToDB = async () => {
    const user = await new User({
        id: '70',
        role: "student",
        password: 'Ani',
        name: {
            firstName: "Mrs",
            middleName: "Ani",
            lastName: "Adrita",
        },
        dateOfBirth: "Twenty Three",
        gender: 'female',
        email: "ani@gmail.com",
        contactNo: "01944452860",
        emergencyContactNo: "01865478239",
        presentAddress: "Hasnabad",
        permanentAddress: "Bikrampur",
    });
    await user.save();
    // console.log(user);
    return user;
}