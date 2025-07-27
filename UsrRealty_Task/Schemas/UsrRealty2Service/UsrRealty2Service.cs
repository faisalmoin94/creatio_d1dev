namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyTaskService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAveragePriceByTypeId(string realtyTypeId)
        {
            if (string.IsNullOrEmpty(realtyTypeId))
            {
                return -1;
            }
			const string realtyOfferTypeId = "2e2d8ce8-23d7-42c6-bd46-b212e81d4927";
			/*
			Select select2 = new Select(UserConnection)
				.Column("Id")
				.From("UsrRealty2OfferType")
				.Where("Name").IsEqual(Column.Parameter("Sale"))
				as Select;
			string realtyOfferTypeId = select2.ExecuteScalar<string>();
			*/
            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPrice"))
                .From("UsrRealty_Task")
                .Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("UsrOfferTypeId").IsEqual(realtyOfferTypeId)
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }		

    }
}