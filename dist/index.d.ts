import React$1 from 'react';

type Props$5 = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
    children: React.ReactNode;
};

declare const Achievement: React$1.FC<Props$5>;

type Props$4 = {
    percentage: number;
};

declare const ProgressBar: React$1.FC<Props$4>;

type Props$3 = {
    username: string;
    profilePicture: string;
    children: React.ReactNode;
};

declare const Profile: React$1.FC<Props$3>;

type Props$2 = {
    children: React.ReactNode;
};

declare const AchievementList: React$1.FC<Props$2>;

type Props$1 = {
    children: React.ReactNode;
};

declare const ProfilePage: React$1.FC<Props$1>;

type Props = {
    children: React.ReactNode;
};

declare const FriendList: React$1.FC<Props>;

export { Achievement, AchievementList, FriendList, Profile, ProfilePage, ProgressBar };
