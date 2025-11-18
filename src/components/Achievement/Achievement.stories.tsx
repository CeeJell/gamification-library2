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
        picture: "https://images.pexels.com/photos/940365/pexels-photo-940365.jpeg",
        percentage: "50",
        id: "1",
        profileId: "1",
        children: ""
    },
};
