import { Sex } from '../generated/graphql';
type Sexsymbols = { [P in Sex]: string };

const symbols: Sexsymbols = {
  MALE: '♂',
  BITCH: '♀',
};

export default symbols;
