import { Dispatch } from "react";
import { ActivitydAction, TActivityState } from "../reducer/activityReducer";
import { Activity } from "./Activity";

type ActiviyListProps = {
  state: TActivityState,
  dispatch: Dispatch<ActivitydAction>;
}

export const ActiviyList = ({ state, dispatch }: ActiviyListProps) => {
  const isActivitiesEmpty = state.activities.length === 0;

  return (
    <>
      {
        isActivitiesEmpty
          ? <p className="text-center text-gray-500">No hay actividades registradas </p>
          : <div className="flex flex-col gap-4 ">
            {
              state.activities.map(activity =>
                <Activity
                  key={activity.id}
                  activity={activity}
                  dispatch={dispatch}
                />
              )}
          </div>
      }
    </>
  )
}
