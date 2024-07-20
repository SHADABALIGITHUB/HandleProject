import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username: '',
    displayName: '',
    googleId: '',
    firstName: '',
    lastName: '',
    profilePhoto: '',
    email: '',
    password: '',
    isVerified: false,
    isVerifiedToken: '',
    isVerifiedTokenExpiry: null,
    isForgotPasswordToken: '',
    isForgotPasswordTokenExpiry: null,
    skillset: [],
    bio: '',
    badges: null,
    location: '',
    website: '',
    company: '',
    projects: [],
    followers: [],
    following: [],
    likedProjects: [],
    myLikedProjects: [],
    savedProjects: [],
    socialLinks: {
        twitter: '',
        linkedin: '',
        github: '',
        personal: '',
    },
    notifications: [],
    mobileNumber: '',
    createdAt: '',
    updatedAt: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setDisplayName(state, action) {
            state.displayName = action.payload;
        }, 
        setUser(state, action) {
            return { ...state, ...action.payload };
        },
        updateProfile(state, action) {
            const { bio, location, website, company } = action.payload;
            state.bio = bio;
            state.location = location;
            state.website = website;
            state.company = company;
        },
        addProject(state, action) {
            state.projects.push(action.payload);
        },
        followUser(state, action) {
            state.following.push(action.payload);
        },
        unfollowUser(state, action) {
            state.following = state.following.filter(userId => userId !== action.payload);
        },
        likeProject(state, action) {
            state.myLikedProjects.push(action.payload);
        },
        saveProject(state, action) {
            state.savedProjects.push(action.payload);
        },
        
    },
});

export const { setUser, updateProfile, addProject, followUser, unfollowUser, likeProject, saveProject } = userSlice.actions;
export default userSlice.reducer;
