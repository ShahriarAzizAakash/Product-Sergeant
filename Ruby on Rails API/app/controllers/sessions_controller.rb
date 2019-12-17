class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params["email"])
                    .try(:authenticate, params["password"])

        if user
            session[:user_id] = user.id
            render json: {status: :created, user: user.company_name}
        else
            render json: {status: 401}
        end
    end 
end
