import play.Project._
import com.tuplejump.sbt.yeoman.Yeoman

name := "nxc"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
    "org.webjars" %% "webjars-play" % "2.2.0",
    "org.reactivemongo" %% "play2-reactivemongo" % "0.11.0-SNAPSHOT",
    "se.digiplant" %% "play-scalr" % "1.0.1"
)

resolvers += "Sonatype Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/"

playScalaSettings

Yeoman.yeomanSettings

