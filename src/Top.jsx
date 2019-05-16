import React from 'react';

function  render(items) {
    return items.map(
        (item, idx) => (
            <li key={idx}>{item}</li>
        )
    );
}

const Top = ({list = []}) => (
    <ul>{render(list)}</ul>
);

export default Top;
