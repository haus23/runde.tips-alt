import { useRecoilValue } from 'recoil';
import authQuery from '../state/auth-query';

function useWaitForAuthentication() {
  useRecoilValue(authQuery);
}

export default useWaitForAuthentication;
