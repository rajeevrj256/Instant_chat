import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All field are required " });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match " });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Username exit, try different" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        await User.create({
            fullName,
            username,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message: "Account Created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);

    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All field are required " });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "INcorrect username and password",
                success: false
            })
        };
        const ispasswordmatch = await bcrypt.compare(password, user.password);
        if (!ispasswordmatch) {
            return res.status(400).json({
                message: "INcorrect username and password",
                success: false
            })

        };
        const tokenData = {
            userId: user._id
        };
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', secure:true}).json({
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto
        });


    } catch (error) {
        console.log(error);
    }
};

export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


export const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error);
    }
}
