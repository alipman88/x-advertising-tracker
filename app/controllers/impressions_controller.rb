class ImpressionsController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @impressions = Impression
      .select('handle, MAX(name) name, COUNT(*) count, MAX(created_at) timestamp')
      .where(id: 2341.., created_at: 7.days.ago..)
      .group(:handle)
      .order(Arel.sql('COUNT(*) DESC, MAX(created_at) DESC'))
      .limit(50)
  end

  def create
    return head 401 unless IpAddress.find_by(ip: request.remote_ip)
    ad_data = JSON.parse(request.raw_post)['ad']
    components = ad_data.delete("\r").delete("\n").chomp('Ad').rpartition('@')

    Impression.create!(
      handle: components[2],
      name: components[0],
      ip: request.ip,
    )

    return head 201
  end

end
