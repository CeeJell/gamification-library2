import Profile from ".";

export default {
    title: "MyComponents/Profile",
    component: Profile,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        username: {
            description: "Username",
            control: {
                type: "text",
            },
        },
        profilePicture: {
            description: "Profile Picture",
            control: {
                type: "text",
            },
        },
    },
};

export const PageOne = {
    args: {
        username: "Charlie Larsson",
        profilePicture: "https://avatars.fastly.steamstatic.com/72629d43a8e63c0459c2d9cc06731f64161e3e17_full.jpg",
        children: ""
    },
};
