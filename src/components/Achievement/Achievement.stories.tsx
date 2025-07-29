import Achievement from ".";

export default {
    title: "MyComponents/Achievement",
    component: Achievement,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        id: {
            description: "Achievement ID",
        },
        profileId: {
            description: "Profile ID",
        },
        title: {
            description: "Achievement title",
            control: {
                type: "text",
            },
        },
        description: {
            description: "Achievement description",
            control: {
                type: "text",
            },
        },
        picture: {
            description: "Picture for achievment",
            control: {
                type: "text",
            },
        },
    },
};

export const PageOne = {
    args: {
        title: "Is this working????",
        description: "Yes it is",
        picture: "https://avatars.fastly.steamstatic.com/72629d43a8e63c0459c2d9cc06731f64161e3e17_full.jpg",
        percentage: "50",
        id: "1",
        profileId: "1",
    },
};
