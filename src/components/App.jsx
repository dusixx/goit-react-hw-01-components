import React from 'react';

// components

import { Task } from './Task/Task';
import { UserProfile } from './UserProfile/UserProfile';
import { UploadStats } from './UploadStats/UploadStats';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// data

import userData from 'data/user.json';
import uploadStats from 'data/uploadStats.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

// App

export const App = () => (
  <>
    <Task
      title="01 - Social network profile"
      children={<UserProfile {...userData} />}
    />

    <Task
      title="02 - Upload stats"
      children={<UploadStats stats={uploadStats} />}
    />

    <Task
      title="03 - Friend list"
      children={<FriendList friends={friends} />}
    />

    <Task
      title="04 - Transaction history"
      children={<TransactionHistory items={transactions} />}
    />
  </>
);
