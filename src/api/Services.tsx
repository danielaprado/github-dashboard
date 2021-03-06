import { ReposModel } from '../models/ReposModel';
import { UsersModel } from '../models/UsersModel';
import { UserDetailedInfo } from '../models/UserDetailedInfo';
import { RepoInfoModel } from '../models/RepoInfoModel';

const myHeaders = new Headers({
  // Authorization: `token XXX`,
  'User-Agent': 'request',
  'Content-Type': 'application/json',
  Accept: 'application/vnd.github.v3+json',
});

export const fetchTopTrendingUsers = async (): Promise<UsersModel> => {
  return await fetch(
    'https://api.github.com/search/users?q=followers:>=0+created:>2021-11-14&page=1&per_page=3&order=desc&type=user',
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchTopActiveUsers = async (): Promise<UsersModel> => {
  return await fetch(
    'https://api.github.com/search/users?q=repos:>=0+created:>2021-11-14&page=1&per_page=3&order=desc&type=user',
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchTopRepos = async (): Promise<ReposModel> => {
  return await fetch(
    'https://api.github.com/search/repositories?q=stars:>=1+created:>2021-11-14&sort=stars&order=desc&page=1&per_page=4',
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchSearchedTrendingUsers = async (
  searchValue: string
): Promise<UsersModel> => {
  return await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=1&per_page=3&order=desc`,
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchSearchedActiveUsers = async (
  searchValue: string
): Promise<UsersModel> => {
  return await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=1&per_page=3&order=desc`,
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
};

export const fetchSearchedTopRepos = async (
  searchValue: string
): Promise<ReposModel> => {
  return await fetch(
    `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&page=1&per_page=4&order=desc`,
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchUser = async (login: string): Promise<UserDetailedInfo> => {
  return await fetch(`https://api.github.com/users/${login}`, {
    method: 'GET',
    headers: myHeaders,
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};

export const fetchUserStarredRepo = async (
  login: string,
  nrOfRepos: number
): Promise<Omit<RepoInfoModel, 'score'>[]> => {
  return await fetch(
    `https://api.github.com/users/${login}/repos?type=owner&page=1&per_page=${nrOfRepos}&sort=stars`,
    {
      method: 'GET',
      headers: myHeaders,
    }
  )
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error('Something went wrong');
    })
    .catch((e) => console.log(e));
};
