import Achievement from ".";

export default {
    title: "MyComponents/Achievement",
    component: Achievement,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: "Added Achievement!",
            control: {
                type: "text",
            },
        },
        description: {
            description: "Achievements have been added",
            control: {
                type: "text",
            },
        },
        picture: {
            control: {
                src: "https://www.w3schools.com/images/w3schools_green.jpg",
                alt: "Achievement picture",
            },
        },
    },
};

export const PageOne = {
    args: {
        title: "Is this working????",
        description: "Yes it is",
        picture: "https://avatars.fastly.steamstatic.com/72629d43a8e63c0459c2d9cc06731f64161e3e17_full.jpg"
    },
};
