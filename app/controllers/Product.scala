package controllers

import play.modules.reactivemongo.MongoController
import play.api.mvc.{AnyContent, Action, Controller}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONRegex, BSONDocument}
import scala.concurrent.Future
import play.api.libs.json.{JsObject, JsValue, Json}

import play.modules.reactivemongo.json.BSONFormats._

import scala.concurrent.ExecutionContext.Implicits.global
import models._
import play.modules.reactivemongo.json.collection.JSONCollection

/**
 * Created with IntelliJ IDEA.
 * User: @sdjamaa
 * Date: 01/12/13
 * Time: 14:31
 * To change this template use File | Settings | File Templates.
 */
object Product extends Controller with MongoController {

  val collection = db[JSONCollection]("products")

  def getAll() = Action.async {

    val query = BSONDocument()
    val cursor = collection.find(query).cursor[JsObject]
    val futureList: Future[List[JsObject]] = cursor.collect[List]()

    futureList.map { list => Ok(Json.arr(list)) }
  }

  def getById(id: String) = Action.async {

    val objectId = BSONObjectID.apply(id)
    val cursor = collection.find(Json.obj("_id"  -> Json.toJson(objectId))).cursor[JsObject]

    val futureList: Future[List[JsObject]] = cursor.collect[List]()

    futureList.map { list => Ok(Json.toJson(list)) }
  }

  def makeOffer(id: String, user: String, points: Int) = Action.async {
    val query = BSONDocument()
    val cursor = collection.find(query).cursor[JsObject]
    val futureList: Future[List[JsObject]] = cursor.collect[List]()

    futureList.map { list => Ok(Json.arr(list)) }
  }

  def createProduct() = Action.async(parse.json) { request =>

    Console.println("LOLOL" + request.body)

    val futureResult = collection.insert(request.body)

    futureResult.map ( x => Ok(""))

  }

}
