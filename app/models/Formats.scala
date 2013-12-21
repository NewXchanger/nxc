package models

import reactivemongo.bson.BSONObjectID
import play.api.libs.json._
import play.api.libs.json.JsObject

/**
 * Created with IntelliJ IDEA.
 * User: fabrice
 * Date: 02/12/13
 * Time: 19:44
 * To change this template use File | Settings | File Templates.
 */
object Formats {

  implicit object ObjectIdReads extends Format[BSONObjectID] {
    def reads(json: JsValue): JsResult[BSONObjectID] = json.asOpt[JsObject] map { oid =>
      (oid \ "$oid" ).asOpt[String] map { str =>
          JsSuccess(new BSONObjectID(str))
      } getOrElse (JsError("Value is not an ObjectId"))
    } getOrElse (JsError("Value is not an ObjectId"))

    def writes(oid: BSONObjectID): JsValue = Json.obj("$oid" -> JsString(oid.stringify))
  }
}
