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
    },
};

export const PageOne = {
    args: {
        children: "",
    },
};
