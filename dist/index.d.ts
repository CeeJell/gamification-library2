import React$1 from 'react';

type Props$5 = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
    children: React.ReactNode;
    borderStyle?: React.CSSProperties;
    pictureStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    descriptionStyle?: React.CSSProperties;
    progressbarSliderStyle?: React.CSSProperties;
    progressbarTextStyle?: React.CSSProperties;
};

declare const Achievement: React$1.FC<Props$5>;

type Props$4 = {
    percentage: number;
    sliderStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    compontentStyle?: React.CSSProperties;
};

declare const ProgressBar: React$1.FC<Props$4>;

type Props$3 = {
    username: string;
    profilePicture: string;
    children: React.ReactNode;
    borderStyle?: React.CSSProperties;
    pictureStyle?: React.CSSProperties;
    usernameStyle?: React.CSSProperties;
};

declare const Profile: React$1.FC<Props$3>;

type Props$2 = {
    children: React.ReactNode;
    borderStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
};

declare const AchievementList: React$1.FC<Props$2>;

type Props$1 = {
    children: React.ReactNode;
    username: string;
    borderStyle?: React.CSSProperties;
    usernameStyle?: React.CSSProperties;
};

declare const ProfilePage: React$1.FC<Props$1>;

type Props = {
    children: React.ReactNode;
    borderStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
};

declare const FriendList: React$1.FC<Props>;

export { Achievement, AchievementList, FriendList, Profile, ProfilePage, ProgressBar };
