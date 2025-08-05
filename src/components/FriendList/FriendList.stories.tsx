import FriendList from ".";

export default {
    title: "MyComponents/FriendList",
    component: FriendList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "Place for Friends to be added",
        },
    },
};

export const PageOne = {
    args: {
        children: "",
    },
};
