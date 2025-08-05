import ProfilePage from ".";

export default {
    title: "MyComponents/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "Place for Achievements to be added",
        },
        username: {
            description: "Username, placed on top of page"
        },
    },
};

export const PageOne = {
    args: {
        children: "",
        username: "Exjobb username",
    },
};
