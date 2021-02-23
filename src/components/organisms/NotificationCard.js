import React from "react";

export function NotificationCard({ gotNotifications, notificationsData }) {
  return (
    <div className=" mt-8 bg-header-blue flex flex-row">
      {gotNotifications ? (
        notificationsData.length === 0 ? (
          <div className="mx-4 py-8">
            <div className="flex flex-col">
              <p className=" mx-auto text-xl text-white">
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
                new notification
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
            <p className=" mx-auto text-xl text-white">
              No Notifications Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
