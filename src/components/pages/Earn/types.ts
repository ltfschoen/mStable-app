import { BigDecimal } from '../../../web3/BigDecimal';
import { Tokens } from '../../../context/DataProvider/TokensProvider';
import { StakingRewardsContract } from '../../../context/earn/types';
import { AccentColors } from '../../../types';

export interface PlatformMetadata {
  colors: AccentColors;
  name: string;
  getPlatformLink(stakingRewardsContract: StakingRewardsContract): string;
  slug: string;
}

export enum Tabs {
  Stake = 'stake',
  Claim = 'claim',
  Exit = 'exit',
}

export interface State {
  stakingRewardsContract?: StakingRewardsContract;
  activeTab: Tabs;
  tokens: Tokens;
  stake: {
    amount?: BigDecimal;
    formValue: string | null;
    needsUnlock: boolean;
    error?: string;
    valid: boolean;
    touched: boolean;
  };
}

export interface Dispatch {
  setActiveTab(tab: Tabs): void;
  setStakeAmount(formValue: string | null): void;
  setMaxStakeAmount(): void;
}

export enum Actions {
  Data,
  SetActiveTab,
  SetStakeAmount,
  SetMaxStakeAmount,
}

export type Action =
  | {
      type: Actions.Data;
      payload: {
        stakingRewardsContract?: StakingRewardsContract;
        tokens: Tokens;
      };
    }
  | { type: Actions.SetActiveTab; payload: Tabs }
  | { type: Actions.SetStakeAmount; payload: string | null }
  | { type: Actions.SetMaxStakeAmount };

export enum Reasons {
  AmountExceedsApprovedAmount,
  AmountExceedsBalance,
  AmountMustBeGreaterThanZero,
  AmountMustBeSet,
  FetchingData,
}

export interface RewardsEarned {
  rewards?: BigDecimal;
  rewardsUsd?: BigDecimal;
  platformRewards?: BigDecimal;
  platformRewardsUsd?: BigDecimal;
}
