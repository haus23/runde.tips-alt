import { useRecoilValue } from 'recoil';
import authQuery from '@/common/state/auth-query';

function useWaitForAuthentication() {
  useRecoilValue(authQuery);
}

export default useWaitForAuthentication;
