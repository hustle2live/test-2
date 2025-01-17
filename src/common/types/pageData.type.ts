type TUsersListProps = {
   usersLength: number;
   activeUserIdx: number;
   activeUserHTML: string;
};

type UserReactProps = { userData: string; allowedAge: number };

interface PopupCloserProps {
   popupHeading: string;
   popupClosers: string[];
}

export { TUsersListProps, UserReactProps, PopupCloserProps };
