package models

import org.joda.time.DateTime
import reactivemongo.bson._
import reactivemongo.bson.BSONDateTime

/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 10/11/13
 * Time: 19:34
 * To change this template use File | Settings | File Templates.
 */
case class Xchange(
  id: Option[BSONObjectID],
  name: String,
  description: String,
  owner: String,
  offers: Int,
  creationDate: Option[DateTime]
)

object Xchange {
  implicit object XchangeBSONReader extends BSONDocumentReader[Xchange] {
    def read(doc: BSONDocument): Product =
      Xchange(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[String]("name").get,
        doc.getAs[String]("description").get,
        doc.getAs[String]("owner").get,
        doc.getAs[Int]("offers").get,
        doc.getAs[BSONDateTime]("creationDate").map(dt => new DateTime(dt.value)))
  }
  implicit object XchangeBSONWriter extends BSONDocumentWriter[Xchange] {
    def write(product: Xchange): BSONDocument =
      BSONDocument(
        "_id" -> product.id.getOrElse(BSONObjectID.generate),
        "name" -> product.name,
        "description" -> product.description,
        "owner" -> product.owner,
        "offers" -> product.offers,
        "creationDate" -> product.creationDate.map(date => BSONDateTime(date.getMillis)))
  }
}
