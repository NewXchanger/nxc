package controllers

import play.modules.reactivemongo.MongoController
import play.api.mvc.{Action, Controller}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONRegex, BSONDocument}
import scala.concurrent.Future
import play.api.libs.json.Json

import play.modules.reactivemongo.json.BSONFormats._

import scala.concurrent.ExecutionContext.Implicits.global
import models._

/**
 * Created with IntelliJ IDEA.
 * User: @sdjamaa
 * Date: 01/12/13
 * Time: 14:31
 * To change this template use File | Settings | File Templates.
 */
object Product extends Controller with MongoController {

  val collection = db[BSONCollection]("products")

  def getAll() = Action.async {

    val query = BSONDocument()
    val cursor = collection.find(query).cursor[BSONDocument]
    val futureList: Future[List[BSONDocument]] = cursor.collect[List](10, true)

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }
  }

  def getById(id: String) = Action.async {
    val objectId = new BSONObjectID(id)
    val cursor = collection.find(BSONDocument("_id" -> objectId)).cursor[BSONDocument]

    val futureList: Future[List[BSONDocument]] = cursor.collect[List](10, true)

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }
  }

  def makeOffer(id: String, user: String, points: Int) = Action.async {
    val query = BSONDocument()
    val cursor = collection.find(query).cursor[BSONDocument]
    val futureList: Future[List[BSONDocument]] = cursor.collect[List](10, true)

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }
  }

}
