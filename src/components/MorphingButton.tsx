import React from 'react';

type Props = {
    children: String,
    kind: String
};

const MorphingButton: React.FC<Props> = ( {children, kind} ) => {
    return (
        <button>{children}</button>
    );
}

export default MorphingButton;