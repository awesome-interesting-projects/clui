import { Session, Step, Do, ISession, ISessionItem, ISessionItemProps } from './session';
import useInputState from './input/useInputState';
import {
  ICommand,
  ICommands,
  ICommandArgs,
  IArg,
  ArgType,
  ArgTypeDef,
  ISuggestion,
  IRunOptions,
} from './input';

export interface ICluiItemProps extends ISessionItemProps, IRunOptions {}

export {
  Session,
  Step,
  Do,
  ISession,
  ISessionItem,
  ISessionItemProps,
  ICommands,
  ICommand,
  ICommandArgs,
  IArg,
  ArgType,
  ArgTypeDef,
  ISuggestion,
  IRunOptions,
  useInputState,
};
