import {form, ranks} from './constants/constant'
import { formHandler, rankHandler } from './utils/utils';


ranks.forEach(rankHandler);
form.addEventListener("submit", formHandler);

