export type Props = {
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
    progressbarStyle?: React.CSSProperties;
}