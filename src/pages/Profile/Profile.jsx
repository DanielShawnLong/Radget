import React from "react";

import { Card, Cup, User } from "iconsax-react";

import ButtonCategory from "../../components/controls/buttons/ButtonCategory/ButtonCategory";
import AccountView from "../../components/views/AccountView/AccountView";

import AppView from "../../components/views/AppView/AppView";
import BillingView from "../../components/views/BillingView/BillingView";
import SubscribtionView from "../../components/views/SubscribtionView/SubscribtionView";

import './Profile.css';

const categories = [
  { id: 0, icon: <User size="18" color="#222222" />, title: "Account", caption: "Edit personal information or change your password", view: <AccountView /> },
  { id: 1, icon: <Cup size="18" color="#222222" />, title: "Subscribtion", caption: "See or change your current plan you have subscribed", view: <SubscribtionView /> },
  { id: 2, icon: <Card size="18" color="#222222" />, title: "Billing", caption: "Download your bills and see upcoming payments", view: <BillingView /> }
];

const Profile = () => {
  const [category, setCategory] = React.useState(0);

  const categoryClickHandler = (element) => {
    setCategory(element.id);
  };

  return (
    <AppView tab={ 2 }>
      <div className="Tools">
        <div className="Tools-Filter">
          <h1 className="Tools-Title">My Profile</h1>
          <p className="Tools-Caption">Settings to setup your profile account</p>
          <div className="Tools-Filter-Box">
            {
              categories.map((element, index) => (
                <ButtonCategory
                  key={ index }
                  id={ element.id }
                  icon={ element.icon }
                  title={ element.title }
                  active={ category === element.id }
                  callback={ categoryClickHandler }
                />
              ))
            }
          </div>
        </div>

        <div className="Tools-List">
          <div className="Tools-Category">
            <h1 className="Tools-Title">{ categories.filter(e => e.id === category)[0].title }</h1>
            <p className="Tools-Caption">{ categories.filter(e => e.id === category)[0].caption }</p>
            <div className="Tools-List-Grid">
              <div className="Profile-Category-View">
                { categories.filter(e => e.id === category)[0].view }
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppView>
  );
}

export default Profile;
