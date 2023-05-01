import React from 'react';

// components

import { Task } from '../Task/Task';
import { UserProfile } from '../UserProfile/UserProfile';
import { Stats } from '../Stats/Stats';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

// data

import userData from 'data/user.json';
import uploadStats from 'data/uploadStats.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

// App

export const App = () => (
  <Container>
    <Task title="01 - Social network profile">
      <UserProfile {...userData} />
    </Task>

    <Task title="02 - Upload stats">
      <Stats title="Upload stats" stats={uploadStats} />
    </Task>

    <Task title="02a - Upload stats (no title)">
      <Stats stats={uploadStats} />
    </Task>

    <Task title="03 - Friend list">
      <FriendList friends={friends} />
    </Task>

    <Task title="04 - Transaction history">
      <TransactionHistory items={transactions} />
    </Task>
  </Container>
);
