package controllers

import play.api.mvc.{Action, Controller}
import play.modules.reactivemongo.MongoController

import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.{BSONString, BSONObjectID, BSONRegex, BSONDocument}

import scala.concurrent.Future

import scala.concurrent.ExecutionContext.Implicits.global

import play.modules.reactivemongo.json.BSONFormats._

import play.api.libs.json._


/**
 * Created with IntelliJ IDEA.
 * User: Sofian DJAMAA
 * Date: 09/11/13
 * Time: 18:34
 * To change this template use File | Settings | File Templates.
 */
object Search extends Controller with MongoController {

  val collection = db[BSONCollection]("products")

  def want(want: String) = Action.async {

    val query = BSONDocument("name" -> BSONRegex(want + ".*", "" ))
    val cursor = collection.find(query).cursor[BSONDocument]

    val futureList: Future[List[BSONDocument]] = cursor.collect[List](10, true)

    //val jsonTransformer = __.json.update( (__ \ 'id).json.copyFrom( (__ \ '_id \ '$oid).json.pick ) )

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }

  }

  def have(have: String) = Action.async {

    val query = BSONDocument("wants" -> BSONString("$elemMatch : { " + have + "}"))
    val cursor = collection.find(query).cursor[BSONDocument]

    val futureList: Future[List[BSONDocument]] = cursor.collect[List](10, true)

    //val jsonTransformer = __.json.update( (__ \ 'id).json.copyFrom( (__ \ '_id \ '$oid).json.pick ) )

    futureList.map { list => Ok(Json.toJson(list.toSeq)) }

  }
}
