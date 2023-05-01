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
    <Task
      title="01 - Social network profile"
      children={<UserProfile {...userData} />}
    />
    <Task
      title="02 - Upload stats"
      children={<Stats title="Upload stats" stats={uploadStats} />}
    />
    <Task
      title="02a - Upload stats (no title)"
      children={<Stats stats={uploadStats} />}
    />
    <Task
      title="03 - Friend list"
      children={<FriendList friends={friends} />}
    />
    <Task
      title="04 - Transaction history"
      children={<TransactionHistory items={transactions} />}
    />
  </Container>
);
