import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';

export const Header = {
    id: '1',
    title: 'Test Header',
    state: 'Header_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
    onPinHeader: action('onPinHeader'),
    onArchiveHeader: action('onArchiveHeader'),
};

storiesOf('Header', module)
    .add('default', () => <Header />)
    .add('pinned', () => <Header />)
    .add('archived', () => <Header />);
