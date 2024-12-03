import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeStats} from "../actions/userAction.js";

const Stats = () => {
    const {name} = useSelector(state => state.user);
    const {followers, following}= useSelector(state => state.stats);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats({statsName: 'followers', sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats({statsName: 'followers', sum: -1}));
                    }}
                >
                    Followers: {followers}
                </div>
                <div
                    onClick={() => dispatch(changeStats( {statsName: 'following', sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats( {statsName: 'following', sum: -1}));
                    }}
                >
                    Following: {following}
                </div>
            </div>
        </div>
    );
};

export default Stats;