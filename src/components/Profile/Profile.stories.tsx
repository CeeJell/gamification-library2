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
        profilePicture: "https://images.pexels.com/photos/940365/pexels-photo-940365.jpeg",
        children: ""
    },
};
