import { selectPPostConstructs } from '@local/composition/selectors';
import { resetFormShow, useAppDispatch } from '@local/composition/store';
import PostDiv from '@local/pages/PPost/core/PostDiv';
import PostA from '@local/pages/PPost/PostA';
import PostB from '@local/pages/PPost/PostB';
import PostC from '@local/pages/PPost/PostC';
import PostC1 from '@local/pages/PPost/PostC1';
import PostD from '@local/pages/PPost/PostD';
import PostE from '@local/pages/PPost/PostE';
import PostF from '@local/pages/PPost/PostF';
import PostG from '@local/pages/PPost/PostG';
import { animated, useSpring } from '@react-spring/web';
import * as React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

/**
 * This is the initial `store.post` configuration
 * We use it to power animations
 */
export const initPPostConstructs = [
    { component: <PostA />, show: true, value: false },
    { component: <PostDiv direction={false} />, show: false, value: false },
    { component: <PostB />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostC />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostC1 />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostD />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostE />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostF />, show: false, value: false },
    { component: <PostDiv />, show: false, value: false },
    { component: <PostG />, show: false, value: false },
];

export type PPostList = typeof initPPostConstructs;

/**
 * Post mock
 * @constructor
 */
function PPost() {
    const dispatch = useAppDispatch();
    const componentList: PPostList = useSelector(selectPPostConstructs);
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(resetFormShow());
    };
    return (
        <>
            <main className="flex flex-col justify-center width-[100%] mb-[25vh]">
                {componentList.map(({ component, show }, index) => {
                    const ref = useRef(null);
                    const springProps = useSpring({
                        opacity: show ? 1 : 0,
                    });
                    return (
                        <animated.div
                            className="opacity-0"
                            data-post={index}
                            style={springProps}
                            key={index}
                            ref={ref}
                        >
                            {component}
                        </animated.div>
                    );
                })}
            </main>
            <nav className="sticky bottom-[2px] mx-auto flex justify-center min-w-[320px] w-[320px]">
                <NavLink onClick={onClick} to="/listings" className="w-[50%] btn preset-filled">
                    Listings
                </NavLink>
                <NavLink onClick={onClick} to="./" className="w-[50%] btn preset-filled">
                    Reset
                </NavLink>
            </nav>
        </>
    );
}

export default PPost;
