import React from "react";
import PropTypes from "prop-types";

export function NotificationCard({
  gotNotifications,
  notificationsData,
  failedFetch,
}) {
  return (
    <div className=" mt-8 bg-header-blue flex flex-row">
      {gotNotifications ? (
        failedFetch ? (
          <div className="mx-4 py-8">
            <div className="flex flex-col">
              <p id="failed-fetch" className="mx-auto text-xl text-white">
                Something went wrong
              </p>
            </div>
          </div>
        ) : notificationsData.length === 0 ? (
          <div className="mx-4 py-8">
            <div className="flex flex-col">
              <p id="no-notifications" className=" mx-auto text-xl text-white">
                No New Notifications
              </p>
            </div>
          </div>
        ) : (
          <div className="mx-4 py-8">
            <div className="flex flex-col">
              <p className=" text-xl text-white">
                You have{" "}
                <span className="font-bold">{notificationsData.length}</span>{" "}
                new notification{notificationsData.length > 1 ? "s" : ""}
              </p>
              {notificationsData.map((notification) => (
                <>
                  <p className="mt-4 font-bold text-white">
                    {notification.title}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: notification.messageText,
                    }}
                    className="mt-4 text-white"
                  ></p>
                </>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="mx-4 py-8">
          <div className="flex flex-col">
            <p id="not-fetched" className=" mx-auto text-xl text-white">
              No Notifications Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
NotificationCard.propTypes = {
  /**
   * Bool to check if notifications are fetched
   */
  gotNotifications: PropTypes.bool.isRequired,
  /**
   * Array of notifications
   */
  notificationsData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /**
   * Bool to check if notifications fetch failed
   */
  failedFetch: PropTypes.bool.isRequired,
};
