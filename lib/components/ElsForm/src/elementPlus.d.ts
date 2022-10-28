import { ElsFormUIPlugin } from "./inter";
import { ElsElemProps } from "../../ElsElem";
import { TOR } from "../../../utils/intf";
export interface DefaultElemExtends {
    prop?: TOR<string | ((props: ElsElemProps) => string)>;
    elFormItem?: TOR<string[] | Record<string, any>>;
    isFormElem?: TOR<boolean>;
}
declare const useElForm: ElsFormUIPlugin;
export default useElForm;
