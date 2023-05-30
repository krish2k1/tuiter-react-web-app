import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import Ifelse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./working-with-arrays";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <Ifelse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}
export default JavaScript