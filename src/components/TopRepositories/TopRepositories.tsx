import { useSelector } from 'react-redux';
import { ReposModel } from '../../models/ReposModel';
import { AppState } from '../../store/rootReducer';
import { generateGuid } from '../../utils/generateGuid';
import { mapIdColor } from '../../utils/mapIdColor';
import { Loader } from '../shared/Loader/Loader';
import { NotFound } from '../shared/NotFound/NotFound';
import { RepoDetailsCard } from './RepoDetailsCard/RepoDetailsCard';
import './TopRepositories.css';

export const TopRepositories = (): JSX.Element => {
  const repos = useSelector(
    (state: AppState): ReposModel => state.app.repos.repos
  );

  const hasError = useSelector(
    (state: AppState): boolean => state.app.repos.hasError
  );

  return (
    <>
      <div className='repos-title'>Top Repositories</div>
      <div className='repos-grid'>
        {!hasError ? (
          repos?.items?.length > 0 ? (
            repos.items.map((repo, index) => (
              <RepoDetailsCard
                key={generateGuid()}
                repo={repo}
                borderColor={mapIdColor[index].color}
              />
            ))
          ) : (
            <NotFound />
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
