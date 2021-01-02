import React, {useEffect, useState} from 'react';
import {Octokit} from "@octokit/rest";
import Spinner from '../Spinner/spinner';
import styles from './AboutMe.module.css'

const octokit = new Octokit();

const AboutMe = () => {

  const [repos, setRepos] = useState(null);
  const [user, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    octokit.users.getByUsername({
      username: 'norvaishas'
    })
      .then(({data}) => {
        const {bio, name, html_url, avatar_url} = data;
        const user = () => {
          return (
            <div className={styles.user_card}>
              <h2 className={styles.username}>
                <a href={html_url} target='_blank'>{name}</a>
              </h2>
              <img className={styles.avatar_img}
                   src={avatar_url}
                   alt="avatar"/>
              <h4 className={styles.bio}>
                {bio}
              </h4>
            </div>
          );
        };
        setOwner(user);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    octokit.repos.listForUser({
      username: 'norvaishas'
    })
      .then(({data}) => {

        const repos = data.map(repo => {
          return (
            <li key={repo.id}>
              <a
                className={styles.link}
                href={repo.html_url}
                target='_blank'>{repo.name}
              </a>
            </li>
          );
        });

        setRepos(repos);
        setLoading(false);
        setError(false);
      })

      .catch(() => {
        setError(true);
        setLoading(false);
      });

  }, []);

  const content = !loading && !error ? repos : 'Ошибка: "Пользователь не найден"'

  return (
    <section className={styles.container}>
      {user}
      <ol className={styles.list}>
        {loading ? <Spinner/> : content}
      </ol>
    </section>
  );
};

export default AboutMe;
