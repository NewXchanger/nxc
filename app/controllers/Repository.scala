package controllers

import play.api.mvc.{Action, Controller}
import play.modules.reactivemongo.MongoController
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scala.concurrent.Future
import play.api.libs.json.Json

import scala.concurrent.ExecutionContext.Implicits.global
import play.modules.reactivemongo.json.BSONFormats._

/**
 * Created by sdjamaa on 12/01/14.
 */
object Repository extends Controller with MongoController {

  val collection = db[BSONCollection]("regions")

  def getAllRegions() = Action.async {

    val query = BSONDocument()
    val cursor = collection.find(query).cursor[BSONDocument]
    val futureList: Future[List[BSONDocument]] = cursor.collect[List](100, true)

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }
  }

}
